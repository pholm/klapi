import prisma from '/utils/prisma';

import { Stack, Box, Button, Heading, ButtonGroup } from '@chakra-ui/react';
import Link from '../../components/Link';
import { useSession } from 'next-auth/react';
import NotAuthenticated from '../../components/NotAuthenticated';
import { useState } from 'react';

export async function getServerSideProps() {
    const loans = await prisma.loan.findMany({
        include: {
            user: true,
        },
    });

    return { props: { loans } };
}

export const LoanCard = ({ loan }) => {
    const getColor = (status) => {
        if (status === 'PENDING') {
            return 'yellow.300';
        } else if (status === 'ACCEPTED') {
            return 'green.300';
        } else if (status === 'REJECTED') {
            return 'red.300';
        } else if (status === 'INUSE')    {
            return 'teal.300';
        } else if (status === 'RETURNED') {
            return 'purple.300';
        }
    };

    return (
        <Link href={`/loan/${loan.id}`}>
            <Box width='100%' key={loan.id}>
                <Box
                    bgColor={getColor(loan.status)}
                    borderTopRadius='5px'
                    padding='2'
                >
                    <Heading as='h3' size='md'>
                        {loan.description || loan.user.name}
                    </Heading>
                    <p>{
                        loan.status === 'APPROVED' ? 'Hyväksytty' :
                        loan.status === 'REJECTED' ? 'Hylätty' :
                        loan.status === 'INUSE' ? 'Käytössä' :
                        loan.status === 'RETURNED' ? 'Palautettu' :
                        'Odottaa käsittelyä'}
                    </p>
                </Box>
                <Box
                    padding={2}
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    backgroundColor='gray.100'
                >
                    <Stack spacing='5px'>
                        <p>Alkaa: {loan.startTime.toLocaleString('fi-FI')}</p>
                        <p>Loppuu: {loan.endTime.toLocaleString('fi-FI')}</p>
                        <p>Varaaja: {loan.user.name}</p>
                    </Stack>
                </Box>
            </Box>
        </Link>
    );
};

export default function Loans({ loans }) {
    const { data: session } = useSession();

    const [LoanCategory, setLoanCategory] = useState('ALL');

    loans.sort((a, b) => {let dateA = new Date(a.startTime), dateB = new Date(b.startTime); return dateB - dateA;});

    if (session?.user?.group !== 'ADMIN') {
        return <NotAuthenticated />;
    }

    if (loans.length === 0) {
        return (
            <Box>
                <Heading>Ei varauksia</Heading>
                <Link href='/'>
                    <Button>Luo varaus etusivulla</Button>
                </Link>
            </Box>
        );
    }

    return (
        <Stack spacing={5}>
            <ButtonGroup>
                <Button onClick={() => setLoanCategory('ALL')}>Kaikki</Button>
                <Button colorScheme={'yellow'} onClick={() => setLoanCategory('PENDING')} >Odottaa käsittelyä</Button>
                <Button colorScheme={'green'} onClick={() => setLoanCategory('ACCEPTED')} >Hyväksytyt</Button>
                <Button colorScheme={'red'} onClick={() => setLoanCategory('REJECTED')} >Hylätyt</Button>
                <Button colorScheme={'teal'} onClick={() => setLoanCategory('INUSE')} >Käytössä</Button>
                <Button colorScheme={'purple'} onClick={() => setLoanCategory('RETURNED')} >Palauteut</Button>
            </ButtonGroup>
            
            {LoanCategory === 'ALL' ? loans.map((loan) => (
                <LoanCard key={loan.id} loan={loan} />
            )) : loans.filter(loan => loan.status === LoanCategory).map((loan) => (
                <LoanCard key={loan.id} loan={loan} />
            ))}
        </Stack>
    );
}
