// RTL Test Component - You can use this to test RTL implementation
"use client"
import { useDirection } from '@/hooks/useDirection';
import { useLocale } from 'next-intl';

export default function RTLTest() {
  const { isRTL, direction } = useDirection();
  const locale = useLocale();

  return (
    <div className={`p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      <h1 className="text-2xl font-bold mb-4">RTL Implementation Test</h1>
      
      <div className="space-y-4">
        <p><strong>Current Locale:</strong> {locale}</p>
        <p><strong>Direction:</strong> {direction}</p>
        <p><strong>Is RTL:</strong> {isRTL ? 'Yes' : 'No'}</p>
        
        <div className={`flex items-center gap-4 p-4 border rounded ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="w-8 h-8 bg-blue-500 rounded"></div>
          <span>This box should be on the {isRTL ? 'right' : 'left'} in {direction} mode</span>
        </div>
        
        <div className={`${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'} flex`}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Button 1</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded">Button 2</button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded">Button 3</button>
        </div>
        
        <div className={`text-sm p-4 bg-gray-100 rounded ${isRTL ? 'text-right' : 'text-left'}`}>
          {isRTL ? 
            'هذا النص يجب أن يكون محاذياً لليمين في الوضع العربي' : 
            'This text should be left-aligned in LTR mode'
          }
        </div>
      </div>
    </div>
  );
}
