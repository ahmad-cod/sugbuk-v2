import { whatsappChannel } from '@/lib/constants';
import { ChevronRight } from 'lucide-react';
import Whatsapp from './svg/whatsapp.svg';

const WhatsappChannelCTA = () => {
  return (
    <button 
      onClick={() => window.open(whatsappChannel, '_blank')}
      className="group bg-white hover:bg-blue-100 text-blue-600 px-6 sm:px-8 py-6 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:cursor-pointer hover:shadow-2xl inline-flex items-center space-x-3 "
    >
      <Whatsapp className="w-6 h-6 text-[#25D366] animate-[spin_5s_ease-in-out_infinite] mr-1" />
      <span>Join Our <span className='hidden sm:inline'> WhatsApp </span> Channel</span>
      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 animate-pulse transition-transform" />
    </button>

  )
}

export default WhatsappChannelCTA