import Login from "./views/common/Login";
import ResetPassword from "./views/common/ResetPassword";
import ChangePassword from "./views/common/ChangePassword";
import RoleSelection from "./views/common/RoleSelection";
import ProfessionalManualSignup from "./views/professional/ProfessionalManualSignup";
import ProfessionalSignUpForm from "./components/Forms/ProfessionalSignUpForm";
import ProfessionalSocialMediaSignup from "./views/professional/ProfessionalSocialMediaSignup";
import Date from "./components/Date/DateComponent";
import DateComponent from "./components/Date/DateComponent";

function App() {
  return (
        // <ProfessionalSignUpForm/> 
        <ProfessionalSocialMediaSignup />  
        // <ProfessionalManualSignup />
        // <Login />
  );
}

export default App;
