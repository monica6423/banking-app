import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const guest = {firstName: "Monica", lastName: "Chang", email: "momo@gmail.com"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={guest.firstName}
            subtext="Access and manage your account and transaction efficientlt"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.30}
          />
        </header>
        Recent transaction
      </div>
      <RightSidebar 
        user={guest}
        transactions={[]}
        banks={[{},{}]}
      />
    </section>
  )
}

export default Home