import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-8">
      <header>
        <h1 className="text-4xl font-bold">UFO Sightings in the USA</h1>
        <p className="text-xl mt-2">Explore the unexplained phenomena across the country</p>
      </header>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p>
          Welcome to the UFO Sightings in the USA website. Here, you can explore various UFO sightings reported across the country. Dive into the mysterious and unexplained phenomena that have intrigued people for decades.
        </p>
        <Button onClick={() => navigate("/about")}>Learn More</Button>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Recent Sightings</h2>
        <ul className="space-y-2">
          <li>
            <strong>Date:</strong> 2023-10-01 <br />
            <strong>Location:</strong> Roswell, NM <br />
            <strong>Description:</strong> Bright lights in the sky, moving erratically.
          </li>
          <li>
            <strong>Date:</strong> 2023-09-15 <br />
            <strong>Location:</strong> Area 51, NV <br />
            <strong>Description:</strong> Unidentified flying object spotted hovering over the base.
          </li>
          <li>
            <strong>Date:</strong> 2023-08-30 <br />
            <strong>Location:</strong> Phoenix, AZ <br />
            <strong>Description:</strong> Multiple lights forming a V-shape in the night sky.
          </li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sightings Map</h2>
        <div className="w-full h-64 bg-gray-700">[Map Placeholder]</div>
      </section>
      <footer className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>Follow us on social media or contact us for more information.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-500">Facebook</a>
          <a href="#" className="text-blue-400">Twitter</a>
          <a href="#" className="text-pink-500">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
