package codezap.template.dto.request;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record CreateSnippetRequest(
        @NotNull(message = "파일 이름이 null 입니다.")
        @Size(max = 255, message = "파일 이름은 최대 255자까지 입력 가능합니다.")
        String filename,
        @NotNull(message = "파일 내용이 null 입니다.")
        String content,
        @NotNull(message = "스니펫 순서가 null 입니다.")
        int ordinal
) {
}
