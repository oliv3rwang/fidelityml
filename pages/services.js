import Navbar from "../components/navbar";
import LargeSquareTileGrid from '../components/dropdownBoxTile'; 

export default function Services() {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
      <div class="container p-8 mx-auto xl:px-0 flex flex-wrap items-center justify-center text-center">
      <Navbar />
        <LargeSquareTileGrid title="Select an Option" options={dropdownOptions} />
        {/* Add more content here */}
      </div>
    );
}