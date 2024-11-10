import image from "../assets/images/image-qr-code.png";

const Card = () => {
  return (
    <div className="w-80 h-[499px] bg-white shadow-lg rounded-2xl p-4 ">
      <img src={image} alt="" className="rounded-2xl" />
      <div className="flex flex-col p-4">
        <h2 className="font-bold text-xl text-[var(--slate900)]">
          Improve your front-end skills by building projects
        </h2>
        <p className="text-[15px] text-[var(--slate500)] mt-3 ">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default Card;
