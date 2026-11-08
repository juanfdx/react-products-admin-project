import { Outlet, useNavigation } from 'react-router'
// COMPONENTS
import { Header } from '../components/shared/Header'
import { NavigationLoader } from '../components/shared/NavigationLoader'


export const MainLayout = () => {

  const navigation = useNavigation()

  const isLoading = navigation.state === 'loading'

  return (
    <>
      <Header />
      {/* You don't need to add a loader to every page. Only add one when that page needs data before rendering. */}
      {isLoading ? (
        <NavigationLoader />
      
      ) : (
        <main className="container mx-auto mt-10 p-10 bg-white border border-gray-200">
          <Outlet />
        </main>
      )}
      
    </>
  )
}