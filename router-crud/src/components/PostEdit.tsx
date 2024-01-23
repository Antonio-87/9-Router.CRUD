import { useState } from "react";
import iconClose from "../assets/close.svg";
import userIcon from "../assets/user-icon.svg";
import { useNavigate } from "react-router-dom";

const PostEdit = () => {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();
  return (
    <div className="container-edit">
      <div className="window-edit">
        <header className="box-close-edit">
          <img className="icon-user" src={userIcon} alt="photo" />
          <span className="description">Редактировать публикацию</span>
          <img
            className="close"
            src={iconClose}
            alt="close"
            onClick={() => navigate(-1)}
          />
        </header>
        <main>
          <textarea
            className="input-content"
            maxLength={196}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onSubmit={(e) => e.preventDefault()}
          ></textarea>
        </main>
        <footer className="box-publish-edit">
          <button
            className="publish"
            onClick={() => {
              addPost();
            }}
          >
            Сохранить
          </button>
        </footer>
      </div>
    </div>
  );
};

export default PostEdit;
