import { onMounted, ref, watchEffect } from "vue";
import type { Ref } from "vue";
import axios from "axios";
import { coursesToken, coursesUrl } from "@/utils/requsetUrls";

interface ICourse {
  id: string;
  title: string;
  tags: [string];
  launchDate: string;
  status: string;
  description: string;
  duration: number;
  lessonsCount: number;
  containsLockedLessons: boolean;
  previewImageLink: string;
  rating: number;
  meta: {
    slug: string;
    skills: [string];
    courseVideoPreview: {
      link: string;
      duration: number;
      previewImageLink: string;
    };
  };
}

export const useCourses = () => {
  const courses: Ref<ICourse[]> = ref([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get<ICourse[]>(coursesUrl, {
        headers: {
          Authorization: coursesToken,
        },
      });

      console.log(response);
    } catch (error: any) {
      console.log(error);
    }
  };

  onMounted(() => {
    fetchCourses();
  });
};
