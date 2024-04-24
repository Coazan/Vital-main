import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/navbar';
import { AppRouter } from './router';
import MaybeShowNavBar from './ShowNavBar/ShowNavBar';


function LoginApp() {
  return (

    <BrowserRouter>
      <MaybeShowNavBar>
        <NavBar />
      </MaybeShowNavBar>
      <AppRouter />

    </BrowserRouter>

  )
}
export default LoginApp
