import Link from "next/link";
import stylesHome from "./MyHome.module.css";

export default function MyHome() {
  const divStyle = {
    height: "100vh",
    backgroundImage: `url(/luz-topo-grande.1647533643.png)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const implementedAPIs = [
    {
      id: 1,
      url: "advice",
      name: "Advices",
      description:
        "Consumes an API that returns an advice",
    },
    {
      id: 2,
      url: "ghibli",
      name: "Ghibli Movies",
      description:
        "List of Studio Ghibli films",
    },
    {
      id: 3,
      url: "https://rick-and-morty-card-app.vercel.app/",
      name: "Rick And Morty",
      description:
        "All information about Rick and Morty",
    },
  ];

  const colors = ["#00c86f", "#6bd1ff", "#9cd33b", "#dc6ebe", "#ffba05"];

  function changeColor(params: string[]) {
    const color = colors[Math.floor(Math.random() * colors.length)];

    const fontColor = {
      color: `${color}`,
    };

    return fontColor;
  }

  return (
    <div style={divStyle} className={stylesHome.main}>
      <div className={stylesHome.container}>
        {implementedAPIs.map((api) => (
          <Link passHref href={`${api.url}`}>
            <div key={api.id} className={stylesHome.card_api}>
              <h1 className={stylesHome.card_api_h} style={changeColor(colors)}>
                {api.name}
              </h1>
              <p className={stylesHome.card_api_p}>{api.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
