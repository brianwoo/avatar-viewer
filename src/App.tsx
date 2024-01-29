import { Button, Card, CardBody, Center, ChakraProvider, Container, Grid, GridItem, Heading, Image, Input } from '@chakra-ui/react';
import { useState } from 'react';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [avatarFileName, setAvatarFileName] = useState('fl.png');

  const showAvatar = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    let firstLetter = 'f';
    let lastLetter = 'l';

    if (firstName.length > 0 && firstName[0].match(/[a-z]/i)) {
      firstLetter = firstName[0].toLowerCase();
    }
    if (lastName.length > 0 && lastName[0].match(/[a-z]/i)) {
      lastLetter = lastName[0].toLowerCase();
    }

    setAvatarFileName(`${firstLetter}${lastLetter}.png`);
  };


  const setFirstNameToUppercase = (firstName: string) => {
    setFirstName(firstName.toUpperCase());
  }

  const setLastNameToUppercase = (lastName: string) => {
    setLastName(lastName.toUpperCase());
  }


  return (
    <ChakraProvider>
      <div className="App">
        <Container maxW='container.lg' pt='10'>
          <Card>
            <CardBody>
              <Heading size='lg'>
                Please enter your name
              </Heading>
              <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem>
                  <Input
                    mt='2'
                    placeholder='First name'
                    size='lg'
                    value={firstName}
                    onChange={(e) => { setFirstNameToUppercase(e.target.value) }} />
                </GridItem>
                <GridItem>
                  <Input
                    mt='2'
                    placeholder='Last name'
                    size='lg'
                    value={lastName}
                    onChange={(e) => { setLastNameToUppercase(e.target.value) }} />
                </GridItem>
              </Grid>
              <Button
                mt="5"
                colorScheme='blue'
                onClick={showAvatar}>
                Show Avatar
              </Button>
            </CardBody>
          </Card>
          <Card mt="5">
            <CardBody>
              <Heading size='lg'>
                Your avatar
              </Heading>
              <Center mt="5" mb="5">
                <Image src={`avatars/${avatarFileName}`} alt={`${firstName} ${lastName}`} />
              </Center>
            </CardBody>
          </Card>
        </Container>
      </div>
    </ChakraProvider>
  );
}

export default App;
