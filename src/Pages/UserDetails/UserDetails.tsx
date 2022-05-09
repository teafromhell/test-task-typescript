import { useState } from "react";
import { useParams } from "react-router-dom";
import { IUsers, IInput } from "../../types/data";
import "./UserDetails.scss";

interface IUserDetailProps {
  users: IUsers[];
}

const inittialState = {
  name: "",
  username: "",
  comment: "",
  email: "",
  street: "",
  city: "",
  zipcode: "",
  phone: "",
  website: "",
};

const UserDetails: React.FC<IUserDetailProps> = ({ users }) => {
  const [isReadonly, setReadonly] = useState(true);
  const [inputUser, setInputUser] = useState<IInput>(inittialState);
  const [inputError, setInputError] = useState<{ [key: string]: boolean }>({});
  const [errorCheck, setErrorCheck] = useState<boolean>(false);
  const { name } = useParams();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputUser({ ...inputUser, [e.target.name]: e.target.value });
    if (!e.target.value) {
      setInputError({ ...inputError, [e.target.name]: true });
      setErrorCheck(true);
    } else {
      setInputError({ ...inputError, [e.target.name]: false });
      setErrorCheck(false);
    }
  };

  const handleChangeComment: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setInputUser({ ...inputUser, comment: e.target.value });
  };

  const isEmpty = (user: any) => {
    if (!inputUser.name) return setInputUser({
      ...inputUser, name: user.name, username: user.username,
      email: user.email, street: user.address.street, city: user.address.city, zipcode: user.address.zipcode,
      phone: user.phone, website: user.website
    });
  }

  const handleSend = () => {
    if (!errorCheck) console.log(JSON.stringify(inputUser));
  };

  return (

    <div className="details">
      <div className="details__header">
        <b>Профиль пользователя</b>
        <button onClick={() => setReadonly(!isReadonly)}>Редактировать</button>
      </div>
      {users.filter(user => user.name === name)
        .map((user) => {
          isEmpty(user);
          return (
            <div key={user.id} className={`details__form`}>
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user.name || inputUser.name}
                onChange={handleChange}
                className={` ${!isReadonly ? "active" : ""}  ${inputError.name ? "red" : ""
                  }`}
              />
              <label htmlFor="">User name</label>
              <input
                name="username"
                type="text"
                defaultValue={user.username || inputUser.username}
                onChange={handleChange}
                className={`${!isReadonly ? "active" : ""} ${inputError.username ? "red" : ""
                  }`}
              />
              <label htmlFor="">E-mail</label>
              <input
                name="email"
                type="text"
                defaultValue={user.email || inputUser.email}
                onChange={handleChange}
                className={`${!isReadonly ? "active" : ""} ${inputError.email ? "red" : ""
                  }`}
              />
              <label htmlFor="">Street</label>
              <input
                name="street"
                type="text"
                defaultValue={user.address.street || inputUser.street}
                onChange={handleChange}
                className={`${!isReadonly ? "active" : ""} ${inputError.street ? "red" : ""
                  }`}
              />
              <label htmlFor="">City</label>
              <input
                name="city"
                type="text"
                defaultValue={user.address.city || inputUser.city}
                onChange={handleChange}
                className={`${!isReadonly ? "active" : ""} ${inputError.city ? "red" : ""
                  }`}
              />
              <label htmlFor="">Zip code</label>
              <input
                name="zipcode"
                type="text"
                defaultValue={user.address.zipcode || inputUser.zipcode}
                onChange={handleChange}
                className={`${!isReadonly ? "active" : ""} ${inputError.zipcode ? "red" : ""
                  }`}
              />
              <label htmlFor="">Phone</label>
              <input
                name="phone"
                type="text"
                defaultValue={user.phone || inputUser.phone}
                onChange={handleChange}
                className={`${!isReadonly ? "active" : ""} ${inputError.phone ? "red" : ""
                  }`}
              />
              <label htmlFor="">Website</label>
              <input
                name="website"
                type="text"
                defaultValue={user.website || inputUser.website}
                onChange={handleChange}
                className={`${!isReadonly ? "active" : ""} ${inputError.website ? "red" : ""
                  }`}
              />
              <label htmlFor="">Comment</label>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                defaultValue={inputUser.comment}
                onChange={handleChangeComment}
                className={!isReadonly ? "active" : ""}
              ></textarea>
            </div>
          );
        })
      }
      <button className={`details__submit-btn ${!isReadonly ? "details__sumbit-btn--active" : ""}`}
        onClick={handleSend}>Отправить</button>
    </div>

  );
};

export default UserDetails;
