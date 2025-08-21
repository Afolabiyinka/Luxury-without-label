import React, { useState, useEffect } from "react";

function ProfilePicUpload() {
  const [profilePic, setProfilePic] = useState(null);

  // Load stored profile pic on mount
  useEffect(() => {
    const savedPic = localStorage.getItem("profilePic");
    if (savedPic) setProfilePic(savedPic);
  }, []);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setProfilePic(base64String);

      // save to local storage
      localStorage.setItem("profilePic", base64String);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <label htmlFor="profile-upload" className="cursor-pointer">
        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border"
          />
        ) : (
          <div className="w-24 h-24 rounded-full flex items-center justify-center border text-gray-500">
            +
          </div>
        )}
      </label>
      <input
        id="profile-upload"
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
}

export default ProfilePicUpload;
