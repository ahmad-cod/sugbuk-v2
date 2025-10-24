import { whatsappChannel } from '@/lib/constants';
import Whatsapp from '../svg/whatsapp.svg'

const FloatingWhatsappIcon = () => {
  return (
    <a
    href={whatsappChannel}
    className="fixed bottom-5 right-3 z-50 sm:bg-green-500 hover:bg-green-600 text-white px-3 sm:px-5 py-3 rounded-full shadow-lg flex items-center gap-2"
>
  <Whatsapp className="w-8 h-8 text-green-600 sm:text-white animate-[bounce_3s_ease-in_infinite]" />
  <span className="hidden sm:inline font-medium">Join Channel</span>
</a>
  )
}

export default FloatingWhatsappIcon;