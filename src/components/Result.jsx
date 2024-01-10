import { useState } from "react";
import Button from "./Button";
function Result({ originUrl, newUrl }) {
  const [actived, setActived] = useState(false);
  const handleActive = () => {
    setActived((pre) => !pre);
  };
  return (
    <div className="flex mb-4 justify-between bg-white rounded-md items-center px-4 py-2 tablet:flex-col mobile:text-sm tablet:items-start">
      <div className="text-ellipsis overflow-hidden whitespace-nowrap w-full">
        {originUrl}
      </div>
      <div className="w-full h-px bg-pm-dark-violet opacity-50 my-2 hidden tablet:block"></div>
      <div className="flex items-center gap-4 tablet:flex-col tablet:items-start mobile:gap-1 tablet:w-full">
        <p className="text-pm-cyan text-ellipsis overflow-hidden whitespace-nowrap w-full">
          {newUrl}
        </p>
        <div className="w-24 tablet:w-full">
          <Button
            onClick={handleActive}
            type={actived ? "actived" : "primary"}
            width="w-full"
          >
            {actived ? "Copied!" : "Copy"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Result;
