package codezap.category.repository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import codezap.category.domain.Category;
import codezap.global.repository.JpaRepositoryTest;
import codezap.member.domain.Member;
import codezap.member.repository.MemberRepository;

@JpaRepositoryTest
public class CategoryRepositoryTest {

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private CategoryRepository sut;

    @Nested
    @DisplayName("Id로 카테고리 조회")
    class FetchById {

        @Test
        @DisplayName("성공: id로 카테고리를 조회할 수 있다.")
        void fetchByIdSuccess() {
            var member = new Member("Zappy", "password", "salt");
            memberRepository.save(member);
            var category = new Category("category1", member);
            sut.save(category);

            var actual = sut.fetchById(category.getId());

            assertThat(actual).isEqualTo(category);
        }

        @Test
        @DisplayName("실패: 존재하지 않는 id로 조회할 경우 예외 발생")
        void fetchByIdFail() {
            var id = 100L;
            assertThatThrownBy(() -> sut.fetchById(id))
                    .isInstanceOf(IllegalArgumentException.class)
                    .hasMessage("식별자 " + id + "에 해당하는 카테고리가 존재하지 않습니다.");
        }
    }

    @Nested
    @DisplayName("회원의 모든 카테고리를 오름차순으로 조회")
    class FindAllByMemberOrderById {

        @Test
        @DisplayName("성공: 회원의 모든 카테고리를 id 오름차순으로 조회할 수 있다.")
        void findAllByMemberOrderByIdSuccess() {
            var member = new Member("Zappy", "password", "salt");
            memberRepository.save(member);
            var category1 = new Category("category1", member);
            sut.save(category1);
            var category2 = new Category("category2", member);
            sut.save(category2);
            var category3 = new Category("category3", member);
            sut.save(category3);

            var actual = sut.findAllByMemberOrderById(member);

            assertThat(actual).containsExactly(category1, category2, category3);
        }
    }

    @Nested
    @DisplayName("카테고리 이름과 회원으로 해당 카테고리가 존재하는지 조회")
    class ExistsByNameAndMember {

        @Test
        @DisplayName("성공: 카테고리 이름과 회원으로 해당 카테고리가 존재하는지 조회")
        void existsByNameAndMemberSuccess() {
            var member = new Member("Zappy", "password", "salt");
            memberRepository.save(member);
            var category1 = new Category("category1", member);
            sut.save(category1);

            var actual = sut.existsByNameAndMember("category1", member);

            assertThat(actual).isTrue();
        }

        @Test
        @DisplayName("실패: 일치하는 카테고리가 없을 경우")
        void existsByNameAndMemberFail() {
            var member = new Member("Zappy", "password", "salt");
            memberRepository.save(member);
            var category1 = new Category("category1", member);
            sut.save(category1);

            var actual = sut.existsByNameAndMember("category2", member);

            assertThat(actual).isFalse();
        }
    }
}
