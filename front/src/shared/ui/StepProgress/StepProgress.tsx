import * as S from './StepProgress.styled';

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
}

export const StepProgress = (props: StepProgressProps) => {
  const { currentStep, totalSteps } = props;

  return (
    <S.StepProgressWrapper>
      <S.StepText>Шаг {currentStep} из {totalSteps}</S.StepText>
      <S.StepSegments>
        {Array.from({ length: totalSteps }, (_, index) => (
          <S.StepSegment key={index} $active={index < currentStep} />
        ))}
      </S.StepSegments>
    </S.StepProgressWrapper>
  );
};
