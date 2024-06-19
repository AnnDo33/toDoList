import { useEffect, useState } from "react";
import connexion from "../../services/connexion";

function Select({ handleForm }) {
  const [selection, setSelection] = useState([]);
  useEffect(() => {
    const statusSelect = async () => {
      try {
        const myStatus = await connexion.get("/api/status");
        setSelection(myStatus.data);
      } catch (error) {
        console.error(error);
      }
    };
    statusSelect();
  }, []);
  return (
    <label>
      status:
      <select name="id_status" onChange={handleForm} required>
        <option value="">----</option>
        {selection.map((select) => (
          <option key={select.id} value={select.id}>
            {select.status}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;
