import { Logo, LoginForm, RegisterForm } from './components'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'

export const Auth = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-[450px] w-full flex flex-col items-center p-[15px]">
        <div className="flex flex-col items-center gap-[15px] mb-[10px]">
          <Logo />
          <h2 className="text-[24px] font-medium">
            Welcome: Login or Register
          </h2>
        </div>
        <div className="w-full">
          <Tabs colorScheme="blue">
            <TabList
              display={'flex'}
              justifyContent={'space-between'}
            >
              <Tab>Login</Tab>
              <Tab>Register</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <LoginForm />
              </TabPanel>
              <TabPanel>
                <RegisterForm />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
