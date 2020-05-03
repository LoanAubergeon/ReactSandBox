import React from 'react'
import { useTranslation } from 'react-i18next'

function Hello(){
  const { t } = useTranslation();

  return (
    <div>
      {t('hello.label')}
      <button class='button'>{t('hello.label')}</button>
    </div>
  )
}

export default Hello