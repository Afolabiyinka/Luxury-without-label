"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import {
  Menu,
  Card,
  Input,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  Bold,
  Code,
  EditPencil,
  Italic,
  Link,
  NavArrowDown,
  Text,
  TextSize,
  TextSquare,
  List as ListIcon,
} from "iconoir-react";

// lexical
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  $createParagraphNode,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import {
  $isListNode,
  REMOVE_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
} from "@lexical/list";
import {
  QuoteNode,
  HeadingNode,
  $isHeadingNode,
  $createHeadingNode,
} from "@lexical/rich-text";
import { ListItemNode, ListNode } from "@lexical/list";
import {
  AutoLinkNode,
  LinkNode,
  $isLinkNode,
  TOGGLE_LINK_COMMAND,
} from "@lexical/link";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { $wrapNodes, $isAtNodeEnd } from "@lexical/selection";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { $getNearestNodeOfType, mergeRegister } from "@lexical/utils";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

const LowPriority = 1;

const blockTypeToBlockName = {
  code: "Code",
  h1: "Large Heading",
  h2: "Small Heading",
  h3: "Heading",
  h4: "Heading",
  h5: "Heading",
  ol: "Numbered List",
  paragraph: "Normal",
  quote: "Quote",
  ul: "Bulleted List",
};

function Placeholder() {
  return (
    <Typography
      as="div"
      className="pointer-events-none absolute left-3 top-2 inline-block select-none overflow-hidden text-base text-foreground"
    >
      Play around with the editor...
    </Typography>
  );
}

function getSelectedNode(selection) {
  const anchor = selection.anchor;
  const focus = selection.focus;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection.isBackward();
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}

function positionEditorElement(editor, rect) {
  if (rect === null) {
    editor.style.opacity = "0";
    editor.style.top = "-1000px";
    editor.style.left = "-1000px";
  } else {
    editor.style.opacity = "1";
    editor.style.top = `${rect.top + rect.height + window.pageYOffset + 10}px`;
    editor.style.left = `${
      rect.left + window.pageXOffset - editor.offsetWidth / 2 + rect.width / 2
    }px`;
  }
}

function FloatingLinkEditor({ editor }) {
  const editorRef = React.useRef(null);
  const inputRef: any = React.useRef(null);
  const mouseDownRef = React.useRef(false);
  const [linkUrl, setLinkUrl] = React.useState("");
  const [isEditMode, setEditMode] = React.useState(false);
  const [lastSelection, setLastSelection] = React.useState(null);

  const updateLinkEditor = React.useCallback(() => {
    const selection: any = $getSelection();
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent)) {
        setLinkUrl(parent.getURL());
      } else if ($isLinkNode(node)) {
        setLinkUrl(node.getURL());
      } else {
        setLinkUrl("");
      }
    }
    const editorElem = editorRef.current;
    const nativeSelection: any = window.getSelection();
    const activeElement = document.activeElement;

    if (editorElem === null) {
      return;
    }

    const rootElement = editor.getRootElement();
    if (
      selection !== null &&
      !nativeSelection.isCollapsed &&
      rootElement !== null &&
      rootElement.contains(nativeSelection.anchorNode)
    ) {
      const domRange = nativeSelection.getRangeAt(0);
      let rect;
      if (nativeSelection.anchorNode === rootElement) {
        let inner = rootElement;
        while (inner.firstElementChild != null) {
          inner = inner.firstElementChild;
        }
        rect = inner.getBoundingClientRect();
      } else {
        rect = domRange.getBoundingClientRect();
      }

      if (!mouseDownRef.current) {
        positionEditorElement(editorElem, rect);
      }
      setLastSelection(selection);
    } else if (!activeElement || activeElement.className !== "link-input") {
      positionEditorElement(editorElem, null);
      setLastSelection(null);
      setEditMode(false);
      setLinkUrl("");
    }

    return true;
  }, [editor]);

  React.useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateLinkEditor();
        });
      }),

      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateLinkEditor();
          return true;
        },
        LowPriority,
      ),
    );
  }, [editor, updateLinkEditor]);

  React.useEffect(() => {
    editor.getEditorState().read(() => {
      updateLinkEditor();
    });
  }, [editor, updateLinkEditor]);

  React.useEffect(() => {
    if (isEditMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditMode]);

  return (
    <Card
      ref={editorRef}
      className="absolute -left-[10000px] -top-[10000px] z-[100] -mt-1.5 w-full max-w-xs rounded-[10px] p-1 opacity-0 transition-opacity duration-300"
    >
      {isEditMode ? (
        <Input
          ref={inputRef}
          value={linkUrl}
          placeholder="Enter URL"
          onChange={(event) => {
            setLinkUrl(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              if (lastSelection !== null) {
                if (linkUrl !== "") {
                  editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkUrl);
                }
                setEditMode(false);
              }
            } else if (event.key === "Escape") {
              event.preventDefault();
              setEditMode(false);
            }
          }}
        />
      ) : (
        <>
          <Card className="relative box-border flex w-full items-center justify-between rounded-none border-0 pl-2.5 shadow-none">
            <Typography
              as="a"
              type="small"
              color="info"
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-8 block overflow-hidden text-ellipsis whitespace-nowrap no-underline hover:underline"
            >
              {linkUrl}
            </Typography>
            <IconButton
              role="button"
              tabIndex={0}
              onClick={() => setEditMode(true)}
              onMouseDown={(event) => event.preventDefault()}
            >
              <EditPencil className="h-4 w-4" />
            </IconButton>
          </Card>
        </>
      )}
    </Card>
  );
}

function ToolbarPlugin() {
  const toolbarRef = React.useRef(null);
  const [editor] = useLexicalComposerContext();
  const [isLink, setIsLink] = React.useState(false);
  const [isBold, setIsBold] = React.useState(false);
  const [isCode, setIsCode] = React.useState(false);
  const [isItalic, setIsItalic] = React.useState(false);
  const [blockType, setBlockType] = React.useState("paragraph");

  const updateToolbar = React.useCallback(() => {
    const selection = $getSelection();

    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : anchorNode.getTopLevelElementOrThrow();
      const elementKey: any = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);
      if (elementDOM !== null) {
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          const type = parentList ? parentList.getTag() : element.getTag();
          setBlockType(type);
        } else {
          const type = $isHeadingNode(element)
            ? element.getTag()
            : element.getType();
          setBlockType(type);
        }
      }
      // Update text format
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsCode(selection.hasFormat("code"));

      // Update links
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }
    }
  }, [editor]);

  React.useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, newEditor) => {
          updateToolbar();
          return false;
        },
        LowPriority,
      ),
    );
  }, [editor, updateToolbar]);

  const insertLink = React.useCallback(() => {
    if (!isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, "https://");
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);

  const formatParagraph = () => {
    if (blockType !== "paragraph") {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createParagraphNode());
        }
      });
    }
  };

  const formatLargeHeading = () => {
    if (blockType !== "h1") {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createHeadingNode("h1"));
        }
      });
    }
  };

  const formatSmallHeading = () => {
    if (blockType !== "h2") {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createHeadingNode("h2"));
        }
      });
    }
  };

  const formatBulletList = () => {
    if (blockType !== "ul") {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, "" as any);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, "" as any);
    }
  };

  return (
    <div className="m-1 flex items-center gap-1" ref={toolbarRef}>
      <Menu>
        <Menu.Trigger as={Button} size="sm" className="group">
          {blockTypeToBlockName[blockType]}
          <NavArrowDown className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-data-[open=true]:rotate-180" />
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item
            onClick={formatParagraph}
            selected={blockType === "paragraph"}
          >
            <Text className="mr-2 h-5 w-5" />
            Normal
          </Menu.Item>
          <Menu.Item selected={blockType === "h1"} onClick={formatLargeHeading}>
            <TextSquare className="mr-2 h-5 w-5" />
            Large Heading
          </Menu.Item>
          <Menu.Item onClick={formatSmallHeading} selected={blockType === "h2"}>
            <TextSize className="mr-2 h-5 w-5" />
            Small Heading
          </Menu.Item>
          <Menu.Item onClick={formatBulletList} selected={blockType === "ul"}>
            <ListIcon className="mr-2 h-5 w-5" />
            Bullet List
          </Menu.Item>
        </Menu.Content>
      </Menu>
      <IconButton
        size="sm"
        variant={isBold ? "solid" : "ghost"}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        }}
        aria-label="Format Bold"
      >
        <Bold className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton
        size="sm"
        variant={isItalic ? "solid" : "ghost"}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }}
        aria-label="Format Italics"
      >
        <Italic className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton
        size="sm"
        variant={isCode ? "solid" : "ghost"}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code");
        }}
        aria-label="Insert Code"
      >
        <Code className="h-4 w-4 stroke-2" />
      </IconButton>
      <IconButton
        size="sm"
        onClick={insertLink}
        variant={isLink ? "solid" : "ghost"}
        aria-label="Insert Link"
      >
        <Link className="h-4 w-4 stroke-2" />
      </IconButton>
      {isLink &&
        createPortal(<FloatingLinkEditor editor={editor} />, document.body)}
    </div>
  );
}

const editorConfig = {
  namespace: "MyEditor",
  onError(error) {
    throw error;
  },
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    AutoLinkNode,
    LinkNode,
  ],
};

export default function TextEditorDemo() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <Card
        variant="outline"
        className="relative mx-auto my-5 w-full max-w-xl overflow-hidden text-left leading-5"
      >
        <ToolbarPlugin />
        <div className="relative rounded-b-lg border-t border-surface">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="lexical min-h-[280px] resize-none px-3 py-2 text-base caret-primary outline-none" />
            }
            placeholder={<Placeholder />}
            ErrorBoundary={null}
          />
          <AutoFocusPlugin />
          <ListPlugin />
          <LinkPlugin />
        </div>
      </Card>
    </LexicalComposer>
  );
}
