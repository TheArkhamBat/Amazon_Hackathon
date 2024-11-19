import Button from "../Components/Button.jsx"
import ResponsiveAppBar from "../Components/ResponsiveAppBar.jsx"
import SimpleBottomNavigation from "../Components/SimpleBottomNavigation.jsx"
import Backdrop from "../Components/Backdrop.jsx"


function Dashboard() {

  return (
    <>
      <ResponsiveAppBar/>
      <div className="mt-4">
        <Button />
      </div>
      <div className="">
        <SimpleBottomNavigation />
      </div>
      <div>
        <Backdrop />
      </div>
    </>
  )
}

export default Dashboard