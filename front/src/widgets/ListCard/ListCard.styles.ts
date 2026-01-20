import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Section = styled.section``;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: 600;
`;

export const CardsContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(324px, 100%), 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;
