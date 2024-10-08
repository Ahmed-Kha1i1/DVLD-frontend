/* eslint-disable react/prop-types */
function Popup({ children, referance, className }) {
  return (
    <div
      className={`fixed left-0 top-0 z-40 flex h-screen w-screen justify-center overflow-y-scroll backdrop-blur-sm ${className ? className : "items-center"}`}
    >
      <div
        className="popup-enter shadow-all rounded-2xl bg-white p-10"
        ref={referance}
      >
        {children}
      </div>
    </div>
  );
}

export default Popup;
