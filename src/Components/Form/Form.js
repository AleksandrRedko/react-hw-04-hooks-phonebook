import { useState } from "react";
import PropTypes from "prop-types";

import s from "./Form.module.css";

export default function Form({ addContacts }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    addContacts({
      name,
      number,
    });
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.Form}>
      <label>
        Name
        <input
          className={s.Input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          className={s.Input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>

      <button className={s.Button} type="submit">
        add contact
      </button>
    </form>
  );
}

// class oldForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };
//   handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addContacts(this.state);
//     this.reset();
//   };
//   reset = () => {
//     this.setState({ name: "", number: "" });
//   };
//   render() {
//     return (
//       <form className={s.Form} onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             className={s.Input}
//             type="text"
//             name="name"
//             value={this.state.name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Number
//           <input
//             className={s.Input}
//             type="tel"
//             name="number"
//             value={this.state.number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleChange}
//           />
//         </label>
//         <button className={s.Button} type="submit">
//           add contact
//         </button>
//       </form>
//     );
//   }
// }

Form.propTypes = {
  addContacts: PropTypes.func.isRequired,
};
