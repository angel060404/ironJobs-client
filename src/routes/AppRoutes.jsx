import { Route, Routes } from 'react-router-dom'
import CompaniesGallery from '../pages/CompaniesPage/CompaniesPage'
import HomePage from '../pages/HomePage/HomePage'
import OffersPage from '../pages/OffersPage/OffersPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import LogInPage from '../pages/LogInPage/LogInPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import PrivateRoutes from './PrivateRoutes'
import CreateCompanyPage from '../pages/CreateCompanyPage/CreateCompanyPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/companies'} element={<CompaniesGallery />} />

            <Route path={'/log-in'} element={<LogInPage />} />
            <Route path={'/sign-up'} element={<SignUpPage />} />

            <Route path={'/offer/userList'} element={<h1>aqui los usuarios que estan el la oferta apuntados</h1>} />

            <Route element={<PrivateRoutes />}>

                <Route path={'/companies/details/:company_id'} element={<h1>aqui los  detalles de las compañias</h1>} />
                <Route path={'/profile'} element={<ProfilePage />} />
                <Route path={'/offers'} element={<OffersPage />} />
                <Route path={'/offers/detail/:offer_id'} element={<h1>aqui los  detalles de las ofertass</h1>} />
                <Route path={'/users'} element={<h1>aqui los usuarios</h1>} />
                <Route path={'/company/create'} element={<CreateCompanyPage />} />

            </Route>

            <Route path={'*'} element={<h1>this page doesnt't exist :(</h1>} />



        </Routes>
    )
}
export default AppRoutes