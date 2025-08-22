import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="SaltGIS Logo" className="h-8 w-8" />
              <span className="text-xl font-bold">SaltGIS</span>
            </div>
            <p className="text-slate-300 mb-4">
              Advanced GIS software and location intelligence solutions for modern organizations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                📚
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/portfolio" className="text-slate-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/features" className="text-slate-300 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/api" className="text-slate-300 hover:text-white transition-colors">API</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-slate-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-slate-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="text-slate-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/docs" className="text-slate-300 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/help" className="text-slate-300 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/status" className="text-slate-300 hover:text-white transition-colors">Status</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white transition-colors">Get Support</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 Saltsaptial OÜ. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 