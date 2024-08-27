import useSidebarStore from '@/stores/sidebar-store'
import { Menu } from 'lucide-react'

const Header = () => {
  const toggleSidebar  = useSidebarStore(state => state.toggleSidebar)
  return (
    <div className='fixed top-0 lg:left-72 left-0 z-50 bg-white border-b w-full h-14 flex items-center justify-between px-4'>
      <button onClick={toggleSidebar}>
        <Menu />
      </button>
      
    </div>
  )
}

export default Header