import { useRef, useState } from "react";
import { PencilSquare, CheckSquare } from "react-bootstrap-icons";

const EditableHeader = ({ as, title, onChange, style, className }) => {
  const [edit, setEdit] = useState(false);
  const inputRef = useRef(null);

  const handleKeys = (e) => {
    if (e.key === "Enter") setEdit(false);
  };
  const done = () => {
    setEdit(false);
  };
  const CustomTag = `${as ? as : "h3"}`;
  return (
    <div className="editable-header">
      {!edit && (
        <CustomTag style={{ ...style, width: "100%" }} className={className}>
          {title}{" "}
          <PencilSquare
            style={{ float: "right" }}
            onClick={(e) => {
              setEdit(true);
              inputRef.current.focus();
            }}
          />
        </CustomTag>
      )}
      {edit && (
        <CustomTag style={{ ...style, width: "100%" }} className={className}>
          <input
            ref={inputRef}
            type="text"
            value={title}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeys}
            className="editable-header__input"
            style={{ width: "calc(100% - 50px)" }}
          />
          <CheckSquare style={{ float: "right" }} onClick={done} />
        </CustomTag>
      )}
    </div>
  );
};

export default EditableHeader;
