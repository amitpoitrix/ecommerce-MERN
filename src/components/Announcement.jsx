import styled from "@emotion/styled"

const Container = styled.div`
    background-color: teal;
    color: white;
    font-size: 14px;
    font-weight: 500;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${'' /* text-align: center; */}
`

const Announcement = () => {
  return (
    <Container>
        Super deal! Free Shipping on orders above ₹500
    </Container>
  )
}

export default Announcement