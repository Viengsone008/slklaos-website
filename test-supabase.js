import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://qawxuytlwqmsomsqlrsc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhd3h1eXRsd3Ftc29tc3FscnNjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDU4ODA4NSwiZXhwIjoyMDY2MTY0MDg1fQ.nQ7X-F4YQxazX0sy-xtcdTvItosKLrPbAOGquJuneMg'
);

(async () => {
  const { data, error } = await supabase.auth.admin.createUser({
    email: 'admin' + '@slk.com',
    password: 'admin123',
    email_confirm: true,
    user_metadata: {
      name: 'SLK Admin',
      role: 'admin',
      login_type: 'admin',
    },
  });
  console.log({ data, error });
})();