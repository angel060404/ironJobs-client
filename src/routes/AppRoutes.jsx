import { Route, Routes } from 'react-router-dom'
import CompaniesGallery from '../pages/CompaniesPage/CompaniesPage'
import HomePage from '../pages/HomePage/HomePage'
import OffersPage from '../pages/OffersPage/OffersPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/companies'} element={<CompaniesGallery />} />
            <Route path={'/offers'} element={<OffersPage />} />
            <Route path={'/offers/detail/:offer_id'} element={<h1>aqui los  detalles de las ofertass</h1>} />
            <Route path={'/companies/details/:company_id'} element={<h1>aqui los  detalles de las compañias</h1>} />
            <Route path={'/profile'} element={<h1>aqui el profile</h1>} />
            <Route path={'/log-in'} element={<h1>aqui se inicia sesion</h1>} />
            <Route path={'/sign-up'} element={<h1>aqui se crea una sesios</h1>} />
            <Route path={'/company/crete'} element={<h1>aqui se crea una compañia</h1>} />
            <Route path={'/users'} element={<h1>aqui los usuarios</h1>} />
            <Route path={'/offer/userList'} element={<h1>aqui los usuarios que estan el la oferta apuntados</h1>} />

            <Route path={'*'} element={<h1>this page doesnt't exist :(</h1>} />



        </Routes>
    )
}
export default AppRoutes