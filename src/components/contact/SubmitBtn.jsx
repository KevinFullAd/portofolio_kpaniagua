import React from "react";

export default function SubmitContent({ status, text }) {
  return (
    <div className="relative flex items-center justify-center h-6 overflow-hidden">
      <div
        className={`transition-transform duration-300 ${
          status === "success" ? "-translate-y-6" : "translate-y-0"
        }`}
      >
        {status === "loading" ? (
          <span className="material-icons-outlined animate-spin text-lg">
            autorenew
          </span>
        ) : (
          <span>{text}</span>
        )}
      </div>

      {status === "success" && (
        <div className="absolute flex items-center justify-center">
          <span className="material-icons-outlined text-lg">
            check_circle
          </span>
        </div>
      )}
    </div>
  );
}