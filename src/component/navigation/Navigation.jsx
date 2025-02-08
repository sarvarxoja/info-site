import "./navigation.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navigation_background">
      <nav className="dark:bg-gray-900/80 backdrop-blur-sm ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-white">Logo</div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#"
                className="text-white cursor-pointer"
              >
                О компании
              </Link>
              <Link
                
                className="text-white cursor-pointer"
              >
                Портфолио
              </Link>
              <Link
                
                className="text-white cursor-pointer"
              >
                Услуги
              </Link>
              <Link
                
                className="text-white cursor-pointer"
              >
                Контакты
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {/* Contact Button */}
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Заказать звонок
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-3 space-y-3">
              <a
                href="#"
                className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                О компании
              </a>
              <a
                href="#"
                className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                Портфолио
              </a>
              <a
                href="#"
                className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                Услуги
              </a>
              <a
                href="#"
                className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                Контакты
              </a>

              <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
