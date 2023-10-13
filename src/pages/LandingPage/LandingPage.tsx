import { useState } from "react";
import "./LandingPage.scss";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    message1: "",
    message2: "",
    message3: "",
    message4: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const messages = [
      formData.message1,
      formData.message2,
      formData.message3,
      formData.message4,
    ].join("|");
    const queryParams = `?name=${formData.name}&author=${formData.author}&messages=${messages}`;
    navigate(`/card${queryParams}`);
  };

  return (
    <div className="landing__page">
      <h1 className="landing__page__title">Birthday Card Generator</h1>
      <form className="landing__page__form" onSubmit={handleSubmit}>
        <label>
          Name:
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Sender:
          <br />
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </label>
        <label>
          Messages:
          <br />
          {
            Array.from(
              { length: 4 },
              (_, index) => (
                <textarea
                  key={index}
                  name={`message${index + 1}`}
                  value={formData[`message${index + 1}` as keyof typeof formData]}
                  onChange={handleChange}
                />
              )
            )
          }
        </label>
        <button className="disable-select" type="submit">
          Create Card
        </button>
      </form>
      <Link className="preview__link" to="/card">
        Preview Sample Card
      </Link>
    </div>
  );
};

export default LandingPage;
