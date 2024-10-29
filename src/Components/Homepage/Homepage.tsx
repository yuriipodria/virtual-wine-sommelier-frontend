import { Container, Box, Form, Columns } from 'react-bulma-components';

export const Homepage = () => {
  return (
    <Container
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        translate: '-50% -50%',
      }}
    >
      <form>
        <Columns>
          <Columns.Column size={'half'}>
            <Form.Field>
              <Box>
                <Form.Label htmlFor="mood-select">
                  What is your mood? 🎉
                </Form.Label>

                <Form.Control>
                  <Form.Select id="mood-select">
                    <option value="">
                      Don&apos;t know yet / Anything will do
                    </option>
                    <option value="celebratory">Celebratory</option>
                    <option value="adventurous">Adventurous</option>
                    <option value="indulgent">Indulgent</option>
                    <option value="nostalgic">Nostalgic</option>
                    <option value="romantic">Romantic</option>
                  </Form.Select>
                </Form.Control>
              </Box>
            </Form.Field>
          </Columns.Column>

          <Columns.Column size={'half'}>
            <Form.Field>
              <Box>
                <Form.Label htmlFor="purpose-select">
                  What you gonna do with the wine? 🎯
                </Form.Label>

                <Form.Control>
                  <Form.Select id="purpose-select">
                    <option value="">
                      Don&apos;t know yet / Anything will do
                    </option>
                    <option value="gift">It&apos;s a gift</option>
                    <option value="complement">Complement for food</option>
                    <option value="cooking">Cooking ingredient</option>
                    <option value="socialization">
                      We need a catalyst to get the conversation going
                    </option>
                    <option value="curiosity">
                      I want to try something entirely new
                    </option>
                  </Form.Select>
                </Form.Control>
              </Box>
            </Form.Field>
          </Columns.Column>

          <Columns.Column size={'one-third'}>
            <Form.Field>
              <Box>
                <Form.Label htmlFor="color-select">
                  What about the color? 🌸
                </Form.Label>
                <Form.Control>
                  <Form.Select id="color-select">
                    <option value="">
                      Don&apos;t know yet / Anything will do
                    </option>
                    <option value="red">Red</option>
                    <option value="white">White</option>
                  </Form.Select>
                </Form.Control>
              </Box>
            </Form.Field>
          </Columns.Column>

          <Columns.Column size={'one-third'}>
            <Form.Field>
              <Box>
                <Form.Label htmlFor="country-select">
                  What country? 🌎
                </Form.Label>
                <Form.Control>
                  <Form.Select id="country-select">
                    <option value="">
                      Don&apos;t know yet / Anything will do
                    </option>
                    <option value="france">France</option>
                    <option value="italy">Italy</option>
                    <option value="spain">Spain</option>
                    <option value="ukraine">Ukraine</option>
                    <option value="us">United States</option>
                    <option value="australia">Australia</option>
                    <option value="argentina">Argentina</option>
                    <option value="chile">Chile</option>
                    <option value="germany">Germany</option>
                    <option value="southAfrica">South Africa</option>
                  </Form.Select>
                </Form.Control>
              </Box>
            </Form.Field>
          </Columns.Column>

          <Columns.Column size={'one-third'}>
            <Form.Field>
              <Box>
                <Form.Label htmlFor="type-select">
                  Which type do you choose? 🥂
                </Form.Label>
                <Form.Control>
                  <Form.Select id="type-select">
                    <option value="">
                      Don&apos;t know yet / Anything will do
                    </option>
                    <option value="dry">Dry</option>
                    <option value="semiDry">Semi-dry</option>
                    <option value="semiSweet">Semi-sweet</option>
                    <option value="sweet">Sweet</option>
                  </Form.Select>
                </Form.Control>
              </Box>
            </Form.Field>
          </Columns.Column>

          <Columns.Column>
            <Form.Field>
              <Box>
                <Form.Label htmlFor="price-input">
                  What is your budget? 💸
                </Form.Label>
                <Form.Control
                  style={{ display: 'flex', gap: '12px', alignItems: 'center' }}
                >
                  <p>From</p>
                  <Form.Input id="price-input" />
                  <p>To</p>
                  <Form.Input />
                </Form.Control>
              </Box>
            </Form.Field>
          </Columns.Column>
        </Columns>
      </form>
    </Container>
  );
};
