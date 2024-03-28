import React from "react";
import Image from "../Image/Image";
import Images from "../../utils/images";

const SocialMediaContainer = () => {
  return (
    <>
      <div className="card my-4 position-relative">
        <span className="position-absolute top-0 start-50 translate-middle bg-white p-2">
          OR
          <span className="visually-hidden">unread messages</span>
        </span>
      </div>
      <div className="d-flex justify-content-evenly social-signup">
        <div className="card w-25">
          <div className="card-body text-center">
            <Image
              src={Images.googleIcon}
              width={30}
              height={30}
              className="img-responsive"
              altText="google icon"
            />
          </div>
        </div>
        <div className="card w-25">
          <div className="card-body text-center">
            <Image
              src={Images.linkedIcon}
              width={30}
              height={30}
              className="img-responsive"
              altText="LinkedIn Icon"
            />
          </div>
        </div>
        <div className="card w-25">
          <div className="card-body text-center">
            <Image
              src={Images.appleIcon}
              width={30}
              height={30}
              className="img-responsive"
              altText="apple Icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaContainer;
