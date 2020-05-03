
import React, { Suspense } from 'react'
import './App.css'
import 'bulma/css/bulma.css'
import './i18n'
import Hello from './Hello'
import ThankYou from './ThankYou'
import LanguageSelector from './LanguageSelector'
import { useTranslation } from 'react-i18next'

const App = () => {
  const { t } = useTranslation();
    return (
      <div>
        {t('hello.label')}
        <Suspense fallback={null}>
          <LanguageSelector />
          <Hello />
          <ThankYou />
        </Suspense>
        {t('test')}
      </div>
    )
}
export default App