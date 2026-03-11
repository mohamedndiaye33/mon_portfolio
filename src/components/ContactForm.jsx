import { useState } from "react";

function ContactForm() {
 const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <form className="flex flex-col gap-4 max-w-md mx-auto">

      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2"
      />

      <button className="bg-black text-white p-2">
        Envoyer
      </button>

    </form>
  );
}

export default ContactForm;