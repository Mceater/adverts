import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Service from "../service/Service";
import "../styles/add-data.css";

function AddData() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("");
  const { getAccessTokenSilently, user } = useAuth0();
  const initialState = {
    userId: user.sub,
    adPhoto: null,
    url: "",
    startDate: "",
    endDate: "",
    categories: [],
  };
  const [formInfo, setFromInfo] = useState(initialState);

  function updateField(e) {
    const name = e.target.attributes.name.value;
    if (name === "file") {
      setFromInfo({ ...formInfo, adPhoto: e.target.files[0] });
    } else if (name === "url") {
      setFromInfo({ ...formInfo, url: e.target.value });
    } else if (name === "startDate") {
      setFromInfo({ ...formInfo, startDate: e.target.value });
    } else if (name === "endDate") {
      setFromInfo({ ...formInfo, endDate: e.target.value });
    } else if (name === "categories") {
      setFromInfo({ ...formInfo, categories: e.target.value.split(" ") });
    }
  }

  async function sendData() {
    const token = await getAccessTokenSilently();

    const formData = new FormData();
    formData.append("adPhoto", formInfo.adPhoto);
    formData.append("userId", formInfo.userId);
    formData.append("url", formInfo.url);
    formData.append("categories", formInfo.categories);

    Service.createAd(formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async function formHandler(e) {
    e.preventDefault();
    sendData();
    navigate("/pricePayPal");
  }

  if (mode === "AdForm") {
    return (
      <div className="AddForm">
        <form onSubmit={formHandler} className="sub-form">
          <label>Select Your Ad Img</label>
          <input type="file" name="file" onChange={updateField} required />

          <label>Enter Your URL</label>
          <input name="url" onChange={updateField} required />

          <label>Caterogies</label>
          <input
            name="categories"
            onChange={updateField}
            maxLength="10"
            required
          />

          <input type="submit" value="Save" />
        </form>
        <button
          onClick={() => {
            setMode("Add");
          }}
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="Add">
      <button
        className="AddBtn"
        onClick={() => {
          setMode("AdForm");
        }}
      >
        Add Your Ad
      </button>
    </div>
  );
}
export default AddData;
