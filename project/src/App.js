import "./App.css";
import LoginPage from "./pages/LoginPage";
import ProduksiSubmit from "./pages/ProduksiSubmit";
import ProduksiAllPost from "./pages/ProduksiAllPost";
import ProduksiOnePost from "./pages/ProduksiOnePost";
import LaporanSubmit from "./pages/LaporanSubmit";
import BioPetani from "./pages/BioPetani";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RiwayatLaporan from "./pages/RiwayatLaporan";
import NotFound from "./pages/NotFound";
import LaporanAllPost from "./pages/LaporanAllPost";
import ModalPage from "./pages/ModalPage";
import FilterPetani from "./Components/FilterPetani";
import Notifikasi from "./Components/Notifikasi";
import { LineChartPemda } from "./Components/LineChartPemda";
import { PieChartPemda } from "./Components/PieChartPemda";
import Pengaturan from "./pages/pengaturan/Pengaturan";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/submit/produksi" element={<ProduksiSubmit />} />
          <Route path="/submit/laporan" element={<LaporanSubmit />} />
          <Route path="/produksi" element={<ProduksiAllPost />} />
          <Route path="/produksi/:id" element={<ProduksiOnePost />} />
          <Route path="/laporan" element={<LaporanAllPost />} />
          <Route path="/bio-petani" element={<BioPetani />} />
          <Route path="/riwayat-laporan" element={<RiwayatLaporan />} />
          <Route path="/pengaturan/:jenis" element={<Pengaturan />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/filter-petani" element={<FilterPetani />} />
          <Route path="/grafik" element={<LineChartPemda />} />
          <Route path="/grafik/pie" element={<PieChartPemda />} />
          <Route path="/notifikasi" element={<Notifikasi />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
