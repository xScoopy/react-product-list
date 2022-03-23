import './App.css';
import data, { allCategories, categoriesUnique, namesAndCategories} from './data';
import './components/CategoryButton'
import CategoryButton from './components/CategoryButton';
function App() {

  const buttons = categoriesUnique.map((cat) => {
    return <CategoryButton name={cat} />
  })

  return (
    <div className="Category-section">
      {buttons}
    </div>
  );
}

export default App;
