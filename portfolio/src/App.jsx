import './App.css'
import {
  NavigationMenu, NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu"
import { TypeAnimation } from 'react-type-animation'
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import Resume from '@/views/Resume'
import Contact from '@/views/Contact'
import AnimatedCursor from "react-animated-cursor"
import Snowfall from 'react-snowfall'
import { ThemeToggle } from '@/components/ThemeToggle'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className='container' style={{ margin: 0 }}>
        <header className=''>
          <div className='header-top flex md:items-end md:justify-between items-center justify-between px-8'>
            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
            <div>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="cursor-pointer nav-link" onClick={() => navigate('/home')}>
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="cursor-pointer nav-link" onClick={() => navigate('/resume')}>
                      Resume
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="cursor-pointer nav-link" onClick={() => navigate('/contact')}>
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </header>
        <main className='flex items-center justify-center' style={{ scrollBehavior: 'smooth'}}>
          <Routes>
            <Route exact path='/portfolio' element={
              <section className="min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4 animate-fade-in-up">
                  <h1 className="sm:text-2xl md:text-5xl font-bold">Hi, I'm Inthrajith Vijayan</h1>
                  <h1 className="text-lg font-mono text-custom">
                    <TypeAnimation
                      sequence={[
                        "Web Developer", 2000,
                        "MERN Stack Developer", 2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </h1>
                </div>
              </section>
            } />
            <Route exact path='/home' element={
              <section className="min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4 animate-fade-in-up">
                  <h1 className="sm:text-2xl md:text-5xl font-bold">Hi, I'm Inthrajith Vijayan</h1>
                  <h1 className="text-lg font-mono">
                    <TypeAnimation
                      sequence={[
                        "Web Developer", 2000,
                        "MERN Stack Developer", 2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </h1>
                </div>
              </section>
            } />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/portfolio" />} />
          </Routes>
        </main>
        <footer className='mt-10'></footer>
        <div className='line top'></div>
        <div className='line left'></div>
        <div className='line right'></div>
        <div className='line bottom'></div>
      </div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
        outerStyle={{
          border: '3px solid var(--cursor-color)',
          mixBlendMode: 'exclusion'
        }}
      />
      <Snowfall
        color="#AACDDC"
        style={{ background: 'transparent' }}
      />
    </>
  )
}

export default App
