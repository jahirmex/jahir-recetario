import { useState } from "react";
import {
  ChefHat,
  Clock,
  Users,
  ArrowLeft,
  CookingPot,
  Leaf,
  Utensils,
} from "lucide-react";
import "./App.css";

const recetas = [
  {
    id: 1,
    nombre: "Pasta cremosa con champiñones",
    categoria: "Comida",
    descripcion:
      "Una pasta deliciosa con champiñones, ajo y una salsa cremosa irresistible.",
    tiempo: "25 min",
    porciones: 2,
    dificultad: "Fácil",
    imagen:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85",
    ingredientes: [
      "200 g de pasta",
      "200 g de champiñones",
      "200 ml de crema para cocinar",
      "2 dientes de ajo",
      "2 cucharadas de aceite de oliva",
      "50 g de queso parmesano",
      "Sal y pimienta al gusto",
    ],
    pasos: [
      "Hierve agua con sal y cocina la pasta siguiendo las instrucciones del paquete.",
      "Lava y corta los champiñones en láminas. Pica finamente el ajo.",
      "Calienta el aceite en una sartén y sofríe el ajo durante un minuto.",
      "Agrega los champiñones y cocina durante 5 minutos hasta que estén dorados.",
      "Incorpora la crema, el queso parmesano, la sal y la pimienta. Mezcla bien.",
      "Añade la pasta escurrida, mezcla con la salsa y sirve caliente.",
    ],
  },
  {
    id: 2,
    nombre: "Hotcakes de plátano",
    categoria: "Desayuno",
    descripcion:
      "Hotcakes suaves y esponjosos con plátano natural, perfectos para comenzar el día.",
    tiempo: "15 min",
    porciones: 2,
    dificultad: "Fácil",
    imagen:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=85",
    ingredientes: [
      "1 plátano maduro",
      "1 huevo",
      "100 g de harina de trigo",
      "100 ml de leche",
      "1 cucharadita de polvo para hornear",
      "1 cucharadita de esencia de vainilla",
      "Mantequilla para cocinar",
      "Miel y fruta para acompañar",
    ],
    pasos: [
      "Machaca el plátano en un recipiente hasta obtener un puré.",
      "Agrega el huevo, la leche y la esencia de vainilla. Mezcla bien.",
      "Incorpora la harina y el polvo para hornear hasta conseguir una mezcla uniforme.",
      "Calienta una sartén antiadherente con un poco de mantequilla.",
      "Vierte pequeñas porciones de mezcla y cocina hasta que aparezcan burbujas.",
      "Voltea los hotcakes y cocina el otro lado hasta que estén dorados.",
      "Sirve con miel y fruta fresca al gusto.",
    ],
  },
];

function App() {
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);
  const [categoria, setCategoria] = useState("Todas");

  const recetasFiltradas =
    categoria === "Todas"
      ? recetas
      : recetas.filter((receta) => receta.categoria === categoria);

  if (recetaSeleccionada) {
    const receta = recetaSeleccionada;

    return (
      <div className="app">
        <header className="navbar">
          <button
            className="brand"
            onClick={() => setRecetaSeleccionada(null)}
            aria-label="Volver al inicio"
          >
            <span className="brand-icon">
              <ChefHat size={25} />
            </span>
            <span>Sazón<span className="brand-dot">.</span></span>
          </button>

          <span className="nav-label">RECETARIO DIGITAL</span>
        </header>

        <main className="detail-container">
          <button
            className="back-button"
            onClick={() => setRecetaSeleccionada(null)}
          >
            <ArrowLeft size={18} />
            Volver a las recetas
          </button>

          <div className="detail-hero">
            <img src={receta.imagen} alt={receta.nombre} />

            <div className="detail-overlay">
              <span className="category-badge">{receta.categoria}</span>
              <h1>{receta.nombre}</h1>
              <p>{receta.descripcion}</p>

              <div className="recipe-stats">
                <span><Clock size={17} /> {receta.tiempo}</span>
                <span><Users size={17} /> {receta.porciones} porciones</span>
                <span><CookingPot size={17} /> {receta.dificultad}</span>
              </div>
            </div>
          </div>

          <div className="detail-grid">
            <section className="ingredients-panel">
              <div className="section-heading">
                <span className="heading-icon"><Leaf size={21} /></span>
                <div>
                  <h2>Ingredientes</h2>
                  <p>Todo lo que necesitas</p>
                </div>
              </div>

              <ul className="ingredients-list">
                {receta.ingredientes.map((ingrediente, index) => (
                  <li key={index}>
                    <span className="ingredient-bullet">✓</span>
                    {ingrediente}
                  </li>
                ))}
              </ul>
            </section>

            <section className="instructions-panel">
              <div className="section-heading">
                <span className="heading-icon"><Utensils size={21} /></span>
                <div>
                  <h2>Preparación</h2>
                  <p>Sigue estos sencillos pasos</p>
                </div>
              </div>

              <div className="steps-list">
                {receta.pasos.map((paso, index) => (
                  <div className="step" key={index}>
                    <span className="step-number">{index + 1}</span>
                    <p>{paso}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        <footer className="footer">
          Hecho con <span>♥</span> para disfrutar la cocina.
        </footer>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#inicio">
          <span className="brand-icon">
            <ChefHat size={25} />
          </span>
          <span>Sazón<span className="brand-dot">.</span></span>
        </a>

        <span className="nav-label">RECETARIO DIGITAL</span>

        <a href="#recetas" className="nav-link">Explorar recetas ↗</a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="eyebrow-line"></span>
              COCINAR NUNCA FUE TAN FÁCIL
            </span>

            <h1>
              Un poco de amor,
              <br />
              <span>mucho sabor.</span>
            </h1>

            <p>
              Descubre recetas deliciosas, prepara algo especial
              y disfruta cada momento en la cocina.
            </p>

            <a href="#recetas" className="primary-button">
              Descubrir recetas <span>↗</span>
            </a>

            <div className="hero-note">
              <span className="note-icon">✳</span>
              <span>Recetas sencillas para disfrutar todos los días.</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85"
                alt="Comida fresca preparada con ingredientes naturales"
              />
            </div>

            <div className="floating-card">
              <span className="floating-icon">✦</span>
              <div>
                <strong>Hecho en casa</strong>
                <p>Con ingredientes sencillos</p>
              </div>
            </div>

            <div className="hero-decoration">SAZÓN</div>
          </div>
        </section>

        <section className="recipes-section" id="recetas">
          <div className="section-top">
            <div>
              <span className="eyebrow">NUESTRO RECETARIO</span>
              <h2>¿Qué se te antoja hoy?</h2>
              <p>Dos ideas deliciosas para preparar algo especial.</p>
            </div>

            <span className="recipe-count">
              0{recetas.length} RECETAS
            </span>
          </div>

          <div className="filters" aria-label="Filtrar recetas">
            {["Todas", "Comida", "Desayuno"].map((opcion) => (
              <button
                key={opcion}
                className={`filter-button ${
                  categoria === opcion ? "active" : ""
                }`}
                onClick={() => setCategoria(opcion)}
              >
                {opcion}
              </button>
            ))}
          </div>

          <div className="recipes-grid">
            {recetasFiltradas.map((receta, index) => (
              <article className="recipe-card" key={receta.id}>
                <button
                  className="card-click-area"
                  onClick={() => setRecetaSeleccionada(receta)}
                  aria-label={`Ver receta de ${receta.nombre}`}
                >
                  <div className="card-image">
                    <img
                      src={receta.imagen}
                      alt={receta.nombre}
                      loading="lazy"
                    />
                    <span className="card-category">{receta.categoria}</span>
                    <span className="card-arrow">↗</span>
                  </div>

                  <div className="card-content">
                    <div className="card-meta">
                      <span><Clock size={15} /> {receta.tiempo}</span>
                      <span>{receta.dificultad}</span>
                    </div>

                    <h3>{receta.nombre}</h3>
                    <p>{receta.descripcion}</p>

                    <div className="card-footer">
                      <span>Ver receta completa</span>
                      <span className="footer-arrow">→</span>
                    </div>
                  </div>
                </button>
              </article>
            ))}

            {recetasFiltradas.length === 0 && (
              <p>No hay recetas en esta categoría.</p>
            )}
          </div>
        </section>

        <section className="quote-section">
          <span className="quote-symbol">“</span>
          <p>La cocina es el corazón de cada hogar.</p>
          <span className="quote-caption">BUEN PROVECHO · CON CARIÑO</span>
        </section>
      </main>

      <footer className="footer">
        <span className="footer-brand"><ChefHat size={19} /> Sazón.</span>
        <span>Hecho con <span className="heart">♥</span> para disfrutar la cocina.</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}

export default App;