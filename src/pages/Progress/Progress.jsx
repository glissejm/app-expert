import React from 'react'
import NavbarClient from '../../components/NavbarClient/NavbarClient'
import ShowProgress from "../../components/showProgress/ShowProgress"


export default function Progress() {
  return (
    <div>
      <NavbarClient/>
      <section className="flex flex-row justify-center mt-16">
        <ShowProgress/>
      </section>
    </div>
  )
}
