import { whatsappChannel } from '@/lib/constants';
import { MessageCircle, ChevronRight } from 'lucide-react';
import Whatsapp from './svg/whatsapp.svg';

export const WhatsappChannel = () => {
  return (
    <button 
      onClick={() => window.open(whatsappChannel, '_blank')}
      className="group bg-white hover:bg-blue-100 text-blue-600 px-6 sm:px-8 py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:cursor-pointer hover:shadow-2xl inline-flex items-center space-x-2"
    >
      {/* <MessageCircle className="hidden w-5 h-5 sm:flex" /> */}
      <Whatsapp className="w-6 h-6 text-[#25D366]" />
      <span>Join Our WhatsApp Channel</span>
      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 animate-pulse transition-transform" />
    </button>

  )
}