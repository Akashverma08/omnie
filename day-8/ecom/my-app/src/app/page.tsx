import Header from "@/src/ui/components/Header";
import ProductList from "@/src/ui/components/ProductList";
import Footer from "@/src/ui/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <ProductList />
      </main>

      <Footer />
    </>
  );
}