import { useState } from "react";
import { useNavigate } from "react-router-dom";


function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
    bio: "",
    avatar: null,
  });


  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario de Registro Enviado con Éxito:", form);

    navigate("/profile");

  };

  return (
    <section className="container py-5">
      <h1 className="text-center mb-4">Registro</h1>

      <form
        onSubmit={handleSubmit}
        className="mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            id="name"
            type="text"
            className="form-control"
            name="name"
            placeholder="Tu nombre"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            placeholder="julio@profesor.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Nombre de Usuario</label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-control"
            placeholder="Nombre de usuario"
            value={form.username}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-control"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="repeatPassword" className="form-label">Repetir Contraseña</label>
          <input
            id="repeatPassword"
            type="password"
            name="repeatPassword"
            className="form-control"
            placeholder="Repite tu contraseña"
            value={form.repeatPassword}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="bio" className="form-label">Bio</label>
          <textarea
            id="bio"
            name="bio"
            className="form-control"
            placeholder="Cuéntanos algo sobre  ti"
            value={form.bio}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="avatar" className="form-label">Avatar</label>
          <input
            id="avatar"
            type="text"
            name="avatar"
            className="form-control"
            placeholder="url de tu imagen"
            value={form.avatar}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Registrarse
        </button>
      </form>
    </section>
  );
}

export default RegisterPage;
