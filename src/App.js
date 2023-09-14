import Home from "./pages/home/Home";
import { lazy, Suspense } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const PriceList = lazy(() => import("./pages/Pricelist/Pricelist"));
const Offers = lazy(() => import("./pages/Offers/Offers"));
const Dentistry = lazy(() => import("./pages/Dentistry/Dentistry"));
const FractionalLaser = lazy(() =>
  import("./pages/FractionalLaser/FractionalLaser")
);
const BBLHero = lazy(() => import("./pages/BBlHero/BBLHero"));
const OvarianRejuvenation = lazy(() =>
  import("./pages/OvarianRejuvenation/OvarianRejuvenation")
);
const HealthFertility = lazy(() =>
  import("./pages/HealthFertility/HealthFertility")
);
const InfertilityTreatment = lazy(() =>
  import("./pages/InfertilityTreatment/InfertilityTreatment")
);
const SlimmingDepartment = lazy(() =>
  import("./pages/SlimmingDepartment/SlimmingDepartment")
);
const Gallary = lazy(() => import("./pages/Gallary/Gallary"));
const Obstetrics = lazy(() => import("./pages/Obstetrics/Obstetrics"));
const DUltrasound = lazy(() => import("./pages/4DUltrasound/4DUltrasound"));
const SexuallyTransmittedDisease = lazy(() =>
  import("./pages/SexuallyTransmittedDisease/SexuallyTransmittedDisease")
);
const LaserHairRemoval = lazy(() =>
  import("./pages/LaserHairRemoval/LaserHairRemoval")
);
const Labiaplasty = lazy(() => import("./pages/Labiaplasty/Labiaplasty"));
const Gynecology = lazy(() => import("./pages/Gynecology/Gynecology"));
const EyeBrows = lazy(() => import("./pages/eyebrows/EyeBrows"));
const PicoLaser = lazy(() => import("./pages/picoLaser/PicoLaser"));
const Morpheus = lazy(() => import("./pages/Morpheus/Morpheus"));
const SkinBooster = lazy(() => import("./pages/skinBooster/SkinBooster"));
const Branches = lazy(() => import("./pages/branches/Branches"));
const VaginismusZreatment = lazy(() =>
  import("./pages/VaginismusZreatment/VaginismusTreatment")
);
const Blogs = lazy(() => import("./pages/blogs/Blogs"));
const AboutUs = lazy(() => import("./pages/aboutUs/AboutUs"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blogs",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          {" "}
          <Blogs />
        </Suspense>
      ),
    },
    {
      path: "/about-us",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <AboutUs />
        </Suspense>
      ),
    },
    {
      path: "/branches",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <Branches />
        </Suspense>
      ),
    },
    {
      path: "/skin-booster-injection",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <SkinBooster />
        </Suspense>
      ),
    },
    {
      path: "/gallary",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <Gallary />
        </Suspense>
      ),
    },
    {
      path: "/fractional-laser-in-dubai",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <FractionalLaser />
        </Suspense>
      ),
    },
    {
      path: "/slimming",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <SlimmingDepartment />
        </Suspense>
      ),
    },
    {
      path: "/morpheus-8-in-dubai",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          {" "}
          <Morpheus />
        </Suspense>
      ),
    },
    {
      path: "/pico-laser",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <PicoLaser />
        </Suspense>
      ),
    },
    {
      path: "/eyebrows-tattoo-removal",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <EyeBrows />
        </Suspense>
      ),
    },
    {
      path: "/laser_hair_removal",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <LaserHairRemoval />
        </Suspense>
      ),
    },
    {
      path: "/gynecology",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <Gynecology />
        </Suspense>
      ),
    },
    {
      path: "/vaginismus-treatment",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <VaginismusZreatment />
        </Suspense>
      ),
    },
    {
      path: "/labioplasty",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <Labiaplasty />
        </Suspense>
      ),
    },
    {
      path: "/sexually-transmitted-disease",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <SexuallyTransmittedDisease />
        </Suspense>
      ),
    },
    {
      path: "/4d-ultrasound-price-in-dubai",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <DUltrasound />
        </Suspense>
      ),
    },
    {
      path: "/bbl-hero",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          {" "}
          <BBLHero />
        </Suspense>
      ),
    },
    {
      path: "/obstetrics",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <Obstetrics />
        </Suspense>
      ),
    },
    {
      path: "/infertility-treatment-and-ivf",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <InfertilityTreatment />
        </Suspense>
      ),
    },
    {
      path: "/your-health-fertility-matters",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <HealthFertility />
        </Suspense>
      ),
    },
    {
      path: "/infertility-treatment-and-ivf/ovarian-rejuvenation-with-prp",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <OvarianRejuvenation />
        </Suspense>
      ),
    },
    {
      path: "/Dentistry",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <Dentistry />
        </Suspense>
      ),
    },
    {
      path: "/price-list",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <PriceList />
        </Suspense>
      ),
    },
    {
      path: "/offers",
      element: (
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <Offers />
        </Suspense>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
